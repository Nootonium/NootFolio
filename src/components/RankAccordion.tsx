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
                className='flex flex-wrap px-4 py-2 font-JetBrainsMono tracking-tighter  hover:text-lg'
              >
                {rank}
                <div className='flex-grow'></div>
                <ChevronDownIcon className={`w-5 ${open ? 'rotate-180' : ''}`} />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 font-OpenSans text-white'>
                {description}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}

export default RankAccordion;
