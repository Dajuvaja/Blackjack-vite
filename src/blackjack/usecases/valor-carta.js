/**
 * Obtener el valor de la carta
 * @param {String} carta Carta seleccionado del deck
 * @returns {Number} regresa el valor numérico de la carta del deck escogida
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
