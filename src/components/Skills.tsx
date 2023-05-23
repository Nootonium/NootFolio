import { forwardRef } from 'react';

const Skills = forwardRef<HTMLDivElement>(function Skills(props, ref) {
  return (
    <div ref={ref} className='h-screen snap-start'>
      <h1>Skills</h1>
    </div>
  );
});
export default Skills;
