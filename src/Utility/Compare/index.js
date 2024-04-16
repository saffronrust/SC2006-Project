import Text from "antd/es/typography/Text";

/**
 * This component is used to display the minimum price of the flat.
 * The lower minimum price will be displayed in green, the higher minimum price will be displayed in red, and the same minimum price will be displayed in yellow.
 * @param {flat} flat
 * @param {compareFlats} compareFlats
 * @returns ShowMinPrice component 
 */
function ShowMinPrice({flat, compareFlats}) {
  if (flat.name === compareFlats[0].name) {
    if (compareFlats[0].minprice < compareFlats[1].minprice) {
      return <Text type="success">Min Price: ${flat.minprice}</Text>
    }
    else if (compareFlats[0].minprice > compareFlats[1].minprice) {
      return <Text type="danger">Min Price: ${flat.minprice}</Text>
    }
    else {
      return <Text type="warning">Min Price: ${flat.minprice}</Text>
    }
  }
  else if (flat.name === compareFlats[1].name) {
    if (compareFlats[1].minprice < compareFlats[0].minprice) {
      return <Text type="success">Min Price: ${flat.minprice}</Text>
    }
    else if (compareFlats[1].minprice > compareFlats[0].minprice) {
      return <Text type="danger">Min Price: ${flat.minprice}</Text>
    }
    else {
      return <Text type="warning">Min Price: ${flat.minprice}</Text>
    }
  }
}

/**
 * This component is used to display the maximum price of the flat.
 * The lower maximum price will be displayed in green, the higher maximum price will be displayed in red, and the same maximum price will be displayed in yellow.
 * @param {flat} flat
 * @param {compareFlats} compareFlats
 * @returns ShowMaxPrice component
 */
function ShowMaxPrice({flat, compareFlats}) {
  if (flat.name === compareFlats[0].name) {
    if (compareFlats[0].maxprice < compareFlats[1].maxprice) {
      return <Text type="success">Max Price: ${flat.maxprice}</Text>
    }
    else if (compareFlats[0].maxprice > compareFlats[1].maxprice) {
      return <Text type="danger">Max Price: ${flat.maxprice}</Text>
    }
    else {
      return <Text type="warning">Max Price: ${flat.maxprice}</Text>
    }
  }
  else if (flat.name === compareFlats[1].name) {
    if (compareFlats[1].maxprice < compareFlats[0].maxprice) {
      return <Text type="success">Max Price: ${flat.maxprice}</Text>
    }
    else if (compareFlats[1].maxprice > compareFlats[0].maxprice) {
      return <Text type="danger">Max Price: ${flat.maxprice}</Text>
    }
    else {
      return <Text type="warning">Max Price: ${flat.maxprice}</Text>
    }
  }
}

/**
 * This component is used to display the time taken to reach the nearest MRT station.
 * The lower time will be displayed in green, the higher time will be displayed in red, and the same time will be displayed in yellow.
 * @param {flat} flat
 * @param {compareFlats} compareFlats
 * @returns ShowMRTStationTime component
 */
function ShowMRTStationTime({flat, compareFlats}) {
  if (flat.name === compareFlats[0].name) {
    if (compareFlats[0].nearestmrtstation < compareFlats[1].nearestmrtstation) {
      return <Text type="success">Nearest MRT Station Time: {flat.nearestmrtstation} minutes</Text>
    }
    else if (compareFlats[0].nearestmrtstation > compareFlats[1].nearestmrtstation) {
      return <Text type="danger">Nearest MRT Station Time: {flat.nearestmrtstation} minutes</Text>
    }
    else {
      return <Text type="warning">Nearest MRT Station Time: {flat.nearestmrtstation} minutes</Text>
    }
  }
  else if (flat.name === compareFlats[1].name) {
    if (compareFlats[1].nearestmrtstation < compareFlats[0].nearestmrtstation) {
      return <Text type="success">Nearest MRT Station Time: {flat.nearestmrtstation} minutes</Text>
    }
    else if (compareFlats[1].nearestmrtstation > compareFlats[0].nearestmrtstation) {
      return <Text type="danger">Nearest MRT Station Time: {flat.nearestmrtstation} minutes</Text>
    }
    else {
      return <Text type="warning">Nearest MRT Station Time: {flat.nearestmrtstation} minutes</Text>
    }
  }
}

export {
    ShowMinPrice,
    ShowMaxPrice,
    ShowMRTStationTime
}