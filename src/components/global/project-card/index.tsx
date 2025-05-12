"use client";

import { itemVariants, themes, toastCustomStyles } from "@/lib/constants";
import { useSlideStore } from "@/store/useSlideStore";
import { JsonValue } from "@prisma/client/runtime/library";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ThumbnailPreview from "./thumbnail";
import { timeAgo } from "@/lib/utils";
import AlertDialogBox from "../alert-dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { deleteProject } from "@/actions/projects";

type Props = {
  projectId: string;
  title: string;
  createdAt: string;
  slideData?: JsonValue;
  themeName: string;
};

const ProjectCard = ({
  projectId,
  title,
  createdAt,
  slideData,
  themeName,
}: Props) => {
  const { setSlides } = useSlideStore();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleNavigation = () => {
    setSlides(JSON.parse(JSON.stringify(slideData)));
    router.push(`/presentation/${projectId}`);
  };

  const handleDelete = async () => {
    setLoading(true);
    if (!projectId) {
      setLoading(false);
      toast.error("Project not found", {
        description: "Please try again.",
        style: toastCustomStyles.error,
      });
      return;
    }
    try {
      const res = await deleteProject(projectId);
      if (res.status !== 200) {
        toast.error("Oops!", {
          description: res.error || "Failed to delete project",
          style: toastCustomStyles.error,
        });
      } else {
        toast.success("Deleted!", {
          description: "Your project has been permanently deleted.",
          style: toastCustomStyles.success,
        });
        router.refresh();
      }
      setOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Oops!", {
        description: "Something went wrong. Please contact support",
        style: toastCustomStyles.error,
      });
    } finally {
      setLoading(false);
    }
  };

  const theme = themes.find((theme) => theme.name === themeName) || themes[0];

  return (
    <motion.div
      variants={itemVariants}
      className="group w-full flex flex-col gap-y-3 rounded-xl p-3 transition-colors hover:bg-muted/50"
    >
      <div
        className="relative aspect-[16/10] overflow-hidden rounded-lg cursor-pointer"
        onClick={handleNavigation}
      >
        <ThumbnailPreview
          theme={theme}
          slide={JSON.parse(JSON.stringify(slideData))?.[0]}
        />
      </div>
      <div className="w-full">
        <div className="space-y-1">
          <h3 className="font-semibold text-base text-primary line-clamp-1">
            {title}
          </h3>
          <div className="flex w-full justify-between items-center gap-2">
            <p
              className="text-sm text-muted-foreground"
              suppressHydrationWarning
            >
              {timeAgo(createdAt)}
            </p>
            <AlertDialogBox
              description="Are you sure? This project will be permanently deleted and cannot be recovered."
              className="bg-red-500 text-white dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-700"
              loading={loading}
              open={open}
              handleOpen={() => setOpen(!open)}
              onClick={handleDelete}
            >
              <Button
                size="sm"
                variant="ghost"
                className="bg-background-80 dark:hover:bg-background-90"
                disabled={loading}
              >
                Delete
              </Button>
            </AlertDialogBox>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
