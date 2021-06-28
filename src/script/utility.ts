/**
 * uuid function return an random uuid
 *
 * @remarks
 * This method is part of the {@link core-library#front_end_chalenge | Front_end subsystem}.
 *
 *
 * @return - return the uuid
 *
 * @beta
 */

const uuid = (): string => {
  let number: number = Math.random(); // 0.9394456857981651
  number.toString(36); // '0.xtis06h6'
  return number.toString(36).substr(2, 9);
};

export { uuid };
