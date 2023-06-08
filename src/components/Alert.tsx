interface AlertProps {
  Icon: any;
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
}

function Alert({ Icon, message, type }: AlertProps) {
  const modifierClasses = {
    info: 'alert-info',
    success: 'alert-success',
    warning: 'alert-warning',
    error: 'alert-error',
  };

  if (!type) {
    type = 'info';
  }

  return (
    <div className={`alert justify-start py-2 ${modifierClasses[type]}`}>
      <Icon className='h-6 w-6' />
      <span>{message}</span>
    </div>
  );
}
export default Alert;
