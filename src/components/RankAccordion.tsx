import { Disclosure } from '@headlessui/react';
import ranks from '../data/ranks.json';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

function RankAccordion() {
  return (
    <div className='max-h-96 overflow-y-auto'>
      {Object.entries(ranks).map(([rank, description]) => (
        <Disclosure as='div' key={rank}>
          {({ open }) => (
            <>
              <Disclosure.Button
                as='div'
                className='font-Oswald flex flex-wrap px-4 py-2 hover:text-lg'
              >
                {rank}
                <div className='flex-grow'></div>
                <ChevronDownIcon className={`w-5 ${open ? 'rotate-180' : ''}`} />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 font-OpenSans'>{description}</Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}

export default RankAccordion;
