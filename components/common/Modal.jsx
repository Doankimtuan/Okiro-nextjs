import React from 'react';
export default function Modal(props) {
  return (
    <div
      className="modal"
      onClick={() => props.onClose && props.onClose()}
      style={{
        position: 'fixed',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 999,
        visibility: 'visible',
        opacity: 1,
        pointerEvents: 'none',
        transition: 'all 0.3s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {props.closeIcon && (
        <div
          onClick={() => props.onClose && props.onClose()}
          style={{ position: 'absolute', right: 30, top: 30, fontSize: 30 }}
        >
          <i className="fas fa-times"></i>
        </div>
      )}
      {props.children}
    </div>
  );
}
