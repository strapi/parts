import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Search from '@strapi/icons/Search';
import { Row } from '../Row';
import { H2 } from '../Text';
import { IconButton } from '../IconButton';
import { Box } from '../Box';
import { Divider } from '../Divider';
import { Searchbar, SearchForm } from '../Searchbar';
import { useId } from '../helpers/useId';
import { usePrevious } from '../helpers/usePrevious';
import { KeyboardKeys } from '../helpers/keyboardKeys';

const CustomDivider = styled(Divider)`
  width: ${24 / 16}rem;
  background-color: ${({ theme }) => theme.colors.neutral200};
`;

export const SubNavHeader = ({ as, label, searchLabel, searchable, onChange, value, onClear, id }) => {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const previousSearchOpenValue = usePrevious(isSearchOpen);
  const clearButtonId = useId('subnav-searchbar-clear', id);
  const searchRef = useRef();
  const searchButtonRef = useRef();

  useEffect(() => {
    if (isSearchOpen && searchRef.current) {
      searchRef.current.focus();
    }
    if (previousSearchOpenValue && !isSearchOpen && searchButtonRef.current) {
      searchButtonRef.current.focus();
    }
  }, [isSearchOpen]);

  const toggleSearch = () => {
    setSearchOpen((isOpen) => !isOpen);
  };

  const handleClear = (e) => {
    onClear(e);
    searchRef.current.focus();
  };

  const handleBlur = (e) => {
    if (e.relatedTarget?.id !== clearButtonId) {
      setSearchOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === KeyboardKeys.ESCAPE) {
      setSearchOpen(false);
    }
  };

  if (isSearchOpen) {
    return (
      <Box paddingLeft={4} paddingTop={5} paddingBottom={2} paddingRight={4}>
        <SearchForm>
          <Searchbar
            name="searchbar"
            value={value}
            onChange={onChange}
            placeholder="e.g: strapi-plugin-abcd"
            onKeyDown={handleKeyDown}
            ref={searchRef}
            onBlur={handleBlur}
            onClear={handleClear}
            onSubmit={(e) => e.preventDefault()}
            clearLabel="Clear"
            size="S"
          >
            {searchLabel}
          </Searchbar>
        </SearchForm>
        <Box paddingLeft={2} paddingTop={4}>
          <CustomDivider />
        </Box>
      </Box>
    );
  }

  return (
    <Box paddingLeft={6} paddingTop={6} paddingBottom={2} paddingRight={4}>
      <Row justifyContent="space-between">
        <H2 as={as}>{label}</H2>
        {searchable && (
          <IconButton ref={searchButtonRef} onClick={toggleSearch} label={searchLabel} icon={<Search />} />
        )}
      </Row>
      <Box paddingTop={4}>
        <CustomDivider />
      </Box>
    </Box>
  );
};

SubNavHeader.defaultProps = {
  as: 'h2',
  searchable: false,
  onChange: () => {},
  onClear: () => {},
  value: '',
  searchLabel: '',
  id: undefined,
};

SubNavHeader.propTypes = {
  as: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  searchLabel: PropTypes.string,
  searchable: PropTypes.bool,
  value: PropTypes.string,
};
