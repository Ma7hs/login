import ForgotPassword from "@/components/ForgotPassword";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function ForgotPasswordPage() {
    const router = useRouter();
    const { id, token } = router.query;
  
    useEffect(() => {
      console.log('ID do cliente:', id);
      console.log('Token:', token);
    }, [id, token]);
  ;

  return (
    <ForgotPassword />
  )
}
