import Text from "antd/es/typography/Text";

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