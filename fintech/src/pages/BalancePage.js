import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../component/common/Header";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const BalancePage = () => {
  const [allowance, setAllowance] = useState("");
  const [tradeList, setTradeList] = useState([]);
  const { search } = useLocation();
  const { finuseno } = queryString.parse(search);
  useEffect(() => {
    getBalance();
    getTradeList();
  }, []);

  const getTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    let transId = "M202112339U" + countnum;
    return transId;
  };


  const getBalance = () => {
    const option = {
      method: "GET",
      url: "/v2.0/account/balance/fin_num",
      headers: {
        Authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      params: {
        bank_tran_id: `${getTransId()}`,
        fintech_use_num: finuseno,
        tran_dtime: "20210527110000",
      },
    };

    axios(option).then((response) => {
      console.log(response.data);
      setAllowance(response.data.balance_amt);
    });
  };

  const getTradeList = () => {
    const option = {
      method: "GET",
      url: "/v2.0/account/transaction_list/fin_num",
      headers: {
        Authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      params: {
        bank_tran_id: `${getTransId()}`,
        fintech_use_num: finuseno,
        inquiry_type : "A",
        inquiry_base : "D",
        from_date : "20190101",
        to_date : "20190101",
        sort_order : "D",
        tran_dtime: "20210527110000",
      },
    };

    axios(option).then((response) => {
      console.log(response.data.res_list);
      setTradeList(response.data.res_list);
    });
  };


  return (
    <>
      <Header title={"잔액 조회"}></Header>
      <p>현재 귀하의 잔액은 : {allowance}</p>
      <table>
        <thead>
        <tr>
          <td>순번</td>
          <td>내용</td>
          <td>거래금액</td>
          <td>잔액</td>
        </tr>
        </thead>
        <tbody>
          {tradeList.map((t,index) =>{
            return(
              <tr key={index}>
                <td>{index}</td>
                <td>{t.print_content}</td>
                <td>{t.tran_amt}</td>
                <td>{t.after_balance_amt}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  );
};

export default BalancePage;
