import { onAuthenticateUser } from '@/actions/user';
import { redirect } from 'next/navigation';

const AuthCallbackPage = async () => {
  const auth = await onAuthenticateUser();

  // Check if auth is null or undefined before accessing properties
  if (!auth || typeof auth !== 'object') {
    console.error('Authentication failed: Invalid response', auth);
    return redirect('/sign-in');
  }

  if (auth.status === 200 || auth.status === 201) {
    return redirect('/dashboard');
  } 

  return redirect('/sign-in'); // Handles all error cases
};

export default AuthCallbackPage;
