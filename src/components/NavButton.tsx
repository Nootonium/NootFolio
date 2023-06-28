import { useTheme } from '../hooks/ThemeContext';

export function NavButton({
  Icon,
  text,
  isActive,
  onClick,
}: {
  Icon: any; // TODO: Fix any
  text: string;
  isActive: boolean;
  onClick: () => void;
}) {
  const { theme } = useTheme();
  const activeClasses = {
    light: 'text-fuchsia-600',
    dark: 'text-teal-400',
    rainbow: 'bg-rainbow-300',
  };

  const activeSection = isActive ? activeClasses[theme] : '';

  return (
    <button
      data-tip={text}
      onClick={onClick}
      className={`tooltip tooltip-info  flex w-auto flex-row items-center justify-center rounded-md p-2 sm:w-32  ${activeSection}`}
    >
      <Icon className='h-8 flex-shrink-0 sm:mr-1' />
      <span className='sr-only font-JetBrainsMono text-lg tracking-tighter sm:not-sr-only'>
        {text}
      </span>
    </button>
  );
}
