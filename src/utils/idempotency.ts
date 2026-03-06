export function generateIdempotencyKey(reservationId: string, userId: string, timestamp: number): string {
  return `${reservationId}-${userId}-${timestamp}`;
}

export function checkForDuplicatePR(existingKeys: Set<string>, newKey: string): boolean {
  return existingKeys.has(newKey);
}