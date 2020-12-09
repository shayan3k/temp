import React from "react";
import TotalPaymentItems from "./TotalPaymentItems";
// import Pagination from "../../../shared/components/Pagination";
function TotalPayments() {
  // const [userCount, setUserCount] = useState(0);

  // useEffect(() => {
  //   updateListComponent();
  // });

  // const updateListComponent = async () => {
  //   Axios({
  //     url:
  //       process.env.REACT_APP_BACKEND_URL +
  //       process.env.REACT_APP_REFERENCED_USERS,
  //     withCredentials: true,
  //     method: "POST",
  //   }).then((res) => {
  //     // console.log(res.data);
  //     try {
  //       setUserCount(res.data.data.itemCount);
  //     } catch (e) {
  //       setUserCount(0);
  //     }
  //   });
  // };

  return (
    <section className="wrapper">
      <h2 className="section-title">مجموعه پرداختی ها</h2>
      <div className="container-fluid">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ردیف</th>
              <th scope="col">دانش آموز</th>
              <th scope="col">تاریخ پرداخت</th>
              <th scope="col">مبلغ پرداختی</th>
              <th scope="col">بابت درس</th>
              <th scope="col">وضعیت</th>
            </tr>
          </thead>
          <tbody>
            <TotalPaymentItems
              index="1"
              fullneme="نوید بهروزی مجد"
              date="۲۴ اسفند ۱۳۹۹"
              price="500,000 تومان"
              cource="۰ تا ۱۰۰ شیمی سوم دبیرستان"
              status="تایید شده"
              class_name="green-color"
            ></TotalPaymentItems>
            <TotalPaymentItems
              index="2"
              fullneme="نوید بهروزی مجد"
              date="۲۴ اسفند ۱۳۹۹"
              price="500,000 تومان"
              cource="۰ تا ۱۰۰ شیمی سوم دبیرستان"
              status="تایید شده"
              class_name="green-color"
            ></TotalPaymentItems>
            <TotalPaymentItems
              index="3"
              fullneme="نوید بهروزی مجد"
              date="۲۴ اسفند ۱۳۹۹"
              price="500,000 تومان"
              cource="۰ تا ۱۰۰ شیمی سوم دبیرستان"
              status="تایید نشده"
              class_name="red-color"
            ></TotalPaymentItems>
          </tbody>
        </table>
        <nav aria-label="...">
          {/* <Pagination
            hasMore={hasMore}
            setHasMore={setHasMore}
            itemCount={itemCount}
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          /> */}
        </nav>
      </div>
    </section>
  );
}

export default TotalPayments;
