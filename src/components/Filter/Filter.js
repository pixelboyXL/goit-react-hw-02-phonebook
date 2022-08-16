import PropTypes from 'prop-types';
import { LabelFilter, InputFilter } from "components/Filter/Filter.styled";

export const Filter = ({ filter, initialiseFilter }) => {
    return (
        <LabelFilter>Find contacts by name
            <InputFilter
                type="text"
                name="filter"
                title="The ability to filter the contact book"
                required
                value={filter}
                onChange={initialiseFilter}
            />
        </LabelFilter>
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    initialiseFilter: PropTypes.func.isRequired,
};