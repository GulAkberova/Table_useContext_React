import { createContext, useState } from "react";

export const tableContext = createContext(null);

export const TableProvider = ({ children }) => {
  const [all, setAll] = useState([]);
  const [detail, setDetail] = useState({});
  const [favorite, setFavorite] = useState([]);
  const [value, setValue] = useState("");
  const [name,setName]=useState('')
  const[price,setPrice]=useState('')
  const[quantity, setQuantity]=useState('')
  const[loading,setLoading]=useState(false)
  const[currentPage,setCurrentPage]=useState(1)
  const[postsPerPage,setPosts]=useState(10)

  const values = {
    all,
    setAll,
    detail,
    setDetail,
    favorite,
    setFavorite,
    value,
    setValue,
    name,
    setName,
    price,
    setPrice,
    quantity,
    setQuantity,
    loading,
    setLoading,
    currentPage,
    setCurrentPage,
    postsPerPage,
    setPosts
  };
  return (
    <tableContext.Provider value={values}>{children}</tableContext.Provider>
  );
};
