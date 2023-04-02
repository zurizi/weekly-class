const makeCoffee = () => {
  return new Promise((resolve, reject) => {
    const isCoffeeMakerReady = false;

    if (isCoffeeMakerReady) {
      resolve("Kopi berhasil dibuat");
    } else {
      reject("Mesin Kopi tidak bisa digunakan!");
    }
  });
};

const handlerSuccess = (coffee) => {
  console.log(coffee);
};

const handlerRejected = (rejectionReason) => {
  console.log(rejectionReason);
};

async function getCoffee() {
  try {
    const coffee = await makeCoffee();
    handlerSuccess(coffee);
  } catch (error) {
    handlerRejected(error);
  }
}

getCoffee();
