export function changeUnit ({ unit }) {
  return {
    type: "CHANGE_UNIT",
    unit
  };

}

export function changeStreetNum ({ streetNum }) {
  return {
    type: "CHANGE_STREET_NUMBER",
    streetNum
  };

}

export function changeStreetName ({ streetName }) {
  return {
    type: "CHANGE_STREET_NAME",
    streetName
  };

}

export function changeSuburb ({ suburb }) {
  return {
    type: "CHANGE_SUBURB",
    suburb
  };

}

export function changePostcode ({ postcode }) {
  return {
    type: "CHANGE_POSTCODE",
    postcode
  };

}
export function changeDeliveryNow ({ deliverNow }) {
  return {
    type: "CHANGE_DELIVERNOW",
    deliverNow
  };

}

export function changeRememberAddress ({ rememberAddress }) {
  return {
    type: "CHANGE_REMEMBER_ADDRESS",
    rememberAddress
  };

}

export function changeTime ({ time }) {
  return {
    type: "CHANGE_TIME",
    time
  };
}

export function clearDeliveryForm () {
  return {
    type: "CLEAR_DELIVERY_FORM",
  };
}