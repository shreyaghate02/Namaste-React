// const Shimmer = () => {
//     return (
//         <h1>loading....</h1>
//     )
// }

// export default Shimmer;
const Shimmer = () => {
    return (
        <div className="restaurant-list">
            {Array(10).fill("").map((e,index) => <div key={index} className="shimmer-card"></div>)}
      </div>
    );
  };
  
  export default Shimmer;
  