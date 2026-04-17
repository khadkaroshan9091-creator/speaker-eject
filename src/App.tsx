import { Analytics } from '@vercel/analytics/react';
import SpeakerEject from './components/SpeakerEject';

export default function App() {
  return (
    <>
      <SpeakerEject />
      <Analytics />
    </>
  );
}
