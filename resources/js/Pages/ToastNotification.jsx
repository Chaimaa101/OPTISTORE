import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export const ToastNotification = () => {
  const { flash } = usePage().props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (flash.success || flash.error) {
      setShow(true);
      const timer = setTimeout(() => setShow(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [flash]);

  if (!show || (!flash.success && !flash.error)) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className={`px-6 py-4 rounded shadow-lg ${flash.success ? 'bg-green-500' : 'bg-red-500'} text-white`}>
        {flash.success || flash.error}
      </div>
    </div>
  );
};
export default ToastNotification;