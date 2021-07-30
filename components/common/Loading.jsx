import Modal from './Modal';
import { SpinnerCircular } from 'spinners-react';
export default function Loading({ label }) {
  return (
    <Modal closeIcon={false}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <SpinnerCircular />
        <span style={{ color: 'black', marginTop: 20, fontWeight: 'bold' }}>{label}</span>
      </div>
    </Modal>
  );
}
