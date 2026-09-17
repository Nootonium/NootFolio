import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import ranks from '../data/ranks.json';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

function RankAccordion() {
  const { t } = useTranslation('ranks');

  return (
    <div className='max-h-96 w-full overflow-y-auto'>
      {Object.entries(ranks).map(([rank]) => (
        <Disclosure as='div' key={rank}>
          {({ open }) => (
            <>
              <DisclosureButton
                as='div'
                role='button'
                className='font-JetBrainsMono flex flex-wrap px-4 py-2 tracking-tighter hover:text-lg'
              >
                {t(`ranks.${rank}`)}
                <div className='grow'></div>
                <ChevronDownIcon className={`w-5 ${open ? 'rotate-180' : ''}`} />
              </DisclosureButton>
              <DisclosurePanel className='font-OpenSans px-4'>
                {t(`rankDescription.${rank}_description`)}{' '}
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}

export default RankAccordion;
