const checkPromo = state => next => action => {
  if (action.type === "TRY_PROMO") {
    if (action.text.toUpperCase() !== "DISCOUNT") {
      return alert("Invalid Promo Code");
    }
  }
  return next(action);
};

export default checkPromo;
