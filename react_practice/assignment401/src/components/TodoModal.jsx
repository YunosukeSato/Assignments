import styles from '@/style/Modal.module.scss';
import { useRef } from 'react';

function TodoModal(ref, defaultValue, handler, editMode) {
  const modalRef = useRef()

  return (
    <div style={editMode} className={styles.overlay}>
      <div ref={modalRef} className={styles.modal}>
        <div className={styles.modalContent}>
          <input type="text" ref={ref} defaultValue={defaultValue} />
          <button onClick={handler}>Update</button>
        </div>
      </div>
    </div>
  );
}

export default TodoModal;
