import { Spot, Tablero } from "../types";


export const calculateAffectedLeft = (
    tablero: Tablero,
    row: number,
    column: number,
    id: number,
    size: number
  ): Spot[] => {
    let affectedDiscsTest: Spot[] = [];
    const couldBeAffectedTest: Spot[] = [];
    let columIteratorTest: number = column;
  
    while (columIteratorTest < size) {
      columIteratorTest += 1;
      const valueAtSpot = tablero[row][columIteratorTest];
      if (valueAtSpot === 0 || valueAtSpot === id) {
        if (valueAtSpot === id) {
          affectedDiscsTest = affectedDiscsTest.concat(couldBeAffectedTest);
        }
        break;
      } else {
        const discLocation: Spot = { row: row, column: columIteratorTest };
        couldBeAffectedTest.push(discLocation);
      }
    }
  
    return affectedDiscsTest;
  };
  
  export const calculateAffectedAbove = (
    tablero: Tablero,
    row: number,
    column: number,
    id: number,
  ) => {
    let affectedDiscsAbove: Spot[] = [];
    const couldBeAffectedAbove: Spot[] = [];
    let rowIteratorAbove: number = row;
  
    while (rowIteratorAbove > 0) {
      rowIteratorAbove -= 1;
      const valueAtSpot = tablero[rowIteratorAbove][column];
      if (valueAtSpot === 0 || valueAtSpot === id) {
        if (valueAtSpot === id) {
          affectedDiscsAbove = affectedDiscsAbove.concat(couldBeAffectedAbove);
        }
        break;
      } else {
        const discLocation: Spot = { row: rowIteratorAbove, column: column };
        couldBeAffectedAbove.push(discLocation);
      }
    }
  
    return affectedDiscsAbove;
  };
  
  export const calculateAffectedBelow = (
    tablero: Tablero,
    row: number,
    column: number,
    id: number,
    size: number
  ) => {
    let affectedDiscsBelow: Spot[] = [];
    const couldBeAffectedBelow: Spot[] = [];
    let rowIteratorBelow: number = row;
  
    while (rowIteratorBelow < size) {
      rowIteratorBelow += 1;
      const valueAtSpot = tablero[rowIteratorBelow][column];
      if (valueAtSpot === 0 || valueAtSpot === id) {
        if (valueAtSpot === id) {
          affectedDiscsBelow = affectedDiscsBelow.concat(couldBeAffectedBelow);
        }
        break;
      } else {
        const discLocation: Spot = { row: rowIteratorBelow, column: column };
        couldBeAffectedBelow.push(discLocation);
      }
    }
  
    return affectedDiscsBelow;
  };
  
  export const calculateAffectedRight = (
    tablero: Tablero,
    row: number,
    column: number,
    id: number,
  ) => {
    let affectedDiscsLeft: Spot[] = [];
    const couldBeAffectedLeft: Spot[] = [];
    let columIteratorLeft: number = column;
  
    while (columIteratorLeft > 0) {
      columIteratorLeft -= 1;
      const valueAtSpot = tablero[row][columIteratorLeft];
      if (valueAtSpot === 0 || valueAtSpot === id) {
        if (valueAtSpot === id) {
          affectedDiscsLeft = affectedDiscsLeft.concat(couldBeAffectedLeft);
        }
        break;
      } else {
        const discLocation: Spot = { row: row, column: columIteratorLeft };
        couldBeAffectedLeft.push(discLocation);
      }
    }
  
    return affectedDiscsLeft;
  };
  
  export const calculateAffectedDownRight = (
    tablero: Tablero,
    row: number,
    column: number,
    id: number,
    size: number
  ): Spot[] => {
    let affectedDiscsDR: Spot[] = [];
    const couldBeAffectedDR: Spot[] = [];
    let columIteratorDR: number = column;
    let rowIteratorDR: number = row;
  
    while (columIteratorDR < size && rowIteratorDR < size) {
      columIteratorDR += 1;
      rowIteratorDR += 1;
      const valueAtSpot = tablero[rowIteratorDR][columIteratorDR];
      if (valueAtSpot === 0 || valueAtSpot === id) {
        if (valueAtSpot === id) {
          affectedDiscsDR = affectedDiscsDR.concat(couldBeAffectedDR);
        }
        break;
      } else {
        const discLocation: Spot = {
          row: rowIteratorDR,
          column: columIteratorDR,
        };
        couldBeAffectedDR.push(discLocation);
      }
    }
  
    return affectedDiscsDR;
  };
  
  export const calculateAffectedDownLeft = (
    tablero: Tablero,
    row: number,
    column: number,
    id: number,
    size: number
  ) => {
    //down left
    let affectedDiscsDL: Spot[] = [];
    const couldBeAffectedDL: Spot[] = [];
    let columIteratorDL: number = column;
    let rowIteratorDL: number = row;
  
    while (columIteratorDL > 0 && rowIteratorDL < size) {
      columIteratorDL -= 1;
      rowIteratorDL += 1;
      const valueAtSpot = tablero[rowIteratorDL][columIteratorDL];
      if (valueAtSpot === 0 || valueAtSpot === id) {
        if (valueAtSpot === id) {
          affectedDiscsDL = affectedDiscsDL.concat(couldBeAffectedDL);
        }
        break;
      } else {
        const discLocation: Spot = {
          row: rowIteratorDL,
          column: columIteratorDL,
        };
        couldBeAffectedDL.push(discLocation);
      }
    }
  
    return affectedDiscsDL;
  };
  
  export const calculateAffectUpRight = (
    tablero: Tablero,
    row: number,
    column: number,
    id: number,
    size: number
  ) => {
    let affectedDiscsUR: Spot[] = [];
    const couldBeAffectedUR: Spot[] = [];
    let columIteratorUR: number = column;
    let rowIteratorUR: number = row;
  
    while (columIteratorUR < size && rowIteratorUR > 0) {
      columIteratorUR += 1;
      rowIteratorUR -= 1;
      const valueAtSpot = tablero[rowIteratorUR][columIteratorUR];
      if (valueAtSpot === 0 || valueAtSpot === id) {
        if (valueAtSpot === id) {
          affectedDiscsUR = affectedDiscsUR.concat(couldBeAffectedUR);
        }
        break;
      } else {
        const discLocation: Spot = {
          row: rowIteratorUR,
          column: columIteratorUR,
        };
        couldBeAffectedUR.push(discLocation);
      }
    }
  
    return affectedDiscsUR;
  };
  
  export const calculateAffectedUpLeft = (
    tablero: Tablero,
    row: number,
    column: number,
    id: number,
  ) => {
    let affectedDiscsUL: Spot[] = [];
    const couldBeAffectedUL: Spot[] = [];
    let columIteratorUL: number = column;
    let rowIteratorUL: number = row;
  
    while (columIteratorUL > 0 && rowIteratorUL > 0) {
      columIteratorUL -= 1;
      rowIteratorUL -= 1;
      const valueAtSpot = tablero[rowIteratorUL][columIteratorUL];
      if (valueAtSpot === 0 || valueAtSpot === id) {
        if (valueAtSpot === id) {
          affectedDiscsUL = affectedDiscsUL.concat(couldBeAffectedUL);
        }
        break;
      } else {
        const discLocation: Spot = {
          row: rowIteratorUL,
          column: columIteratorUL,
        };
        couldBeAffectedUL.push(discLocation);
      }
    }
  
    return affectedDiscsUL;
  };
  