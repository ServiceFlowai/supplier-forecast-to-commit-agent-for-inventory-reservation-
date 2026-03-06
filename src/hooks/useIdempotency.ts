import { useState } from 'react';
import { generateIdempotencyKey, checkForDuplicatePR } from '../utils/idempotency';

export function useIdempotency() {
  const [existingKeys, setExistingKeys] = useState<Set<string>>(new Set());

  const createPR = (reservationId: string, userId: string) => {
    const timestamp = Date.now();
    const newKey = generateIdempotencyKey(reservationId, userId, timestamp);

    if (checkForDuplicatePR(existingKeys, newKey)) {
      console.error('Duplicate PR creation attempt detected.');
      return;
    }

    setExistingKeys(prevKeys => new Set(prevKeys).add(newKey));
    console.log('PR created with key:', newKey);
  };

  return { createPR };
}