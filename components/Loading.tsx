import { FC } from 'react';

const Loading: FC = () => {
  return (
    <div className="flex justify-center">
      <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent" />
    </div>
  );
};

export default Loading;
