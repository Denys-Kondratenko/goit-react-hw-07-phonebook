import { Formik, Form } from 'formik';
import { FilterForm, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Formik initialValues={filter}>
      <Form autoComplete="off">
        <FilterForm htmlFor="filter">
          Find contacts by name
          <Input
            name="filter"
            value={filter}
            onChange={event =>
              dispatch(filterContacts(event.currentTarget.value))
            }
          />
        </FilterForm>
      </Form>
    </Formik>
  );
};
