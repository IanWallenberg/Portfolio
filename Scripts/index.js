
console.log("Before timeout")

const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("set to three seconds inside promise")
    resolve("The value of the promise");
  }, 3 * 1000);
});

timeoutPromise.then((result) => {
  console.log("timeout is done!", result);
})
.catch((error) => {
  console.log("TimeoutPromise errored out", error)
});

console.log("after set timeout");