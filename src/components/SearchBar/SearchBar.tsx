import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import s from "./SearchBar.module.css";

type SearchFormValues = {
  query: string;
};

type Props = {
  setQuery: (query: string) => void;
};

const SearchBar = ({ setQuery }: Props) => {
  const initialValues: SearchFormValues = {
    query: "",
  };

  const handleSubmit = (values: SearchFormValues) => {
    const { query } = values;
    if (!query.trim()) {
      toast.error("Search field is empty. Please enter your request");
      return;
    }
    setQuery(query);
  };

  return (
    <header>
      <Toaster position="top-right" />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.searchBar}>
          <Field
            className={s.searchInput}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={s.searchBtn} type="submit">
            <FaSearch size={14} /> Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
