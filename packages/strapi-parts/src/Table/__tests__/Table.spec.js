import * as React from 'react';
import { render } from '@testing-library/react';
import { Table } from '../Table';
import { ThemeProvider } from '../../ThemeProvider';
import { lightTheme } from '../../themes';
import EditIcon from '@strapi/icons/EditIcon';
import { VisuallyHidden } from '../../VisuallyHidden';
import { BaseCheckbox } from '../../BaseCheckbox';
import { Thead } from '../Thead';
import { Tbody } from '../Tbody';
import { Tr } from '../Tr';
import { Td, Th } from '../Cell';
import { TFooter } from '../TFooter';
import { Text, TableLabel } from '../../Text';
import { Avatar } from '../../Avatar';
import { IconButton } from '../../IconButton';

jest.mock('../../helpers/genId', () => ({
  genId: () => 123,
}));

describe('Table', () => {
  it('snapshots the component', () => {
    const ROW_COUNT = 6;
    const COL_COUNT = 7;
    const entry = {
      cover: 'https://avatars.githubusercontent.com/u/3874873?v=4',
      description: 'Chez Léon is a human sized Parisian...',
      category: 'French cuisine',
      contact: 'Leon Lafrite',
    };
    const entries = [];
    for (let i = 0; i < 2; i++) {
      entries.push({ ...entry, id: i });
    }

    const { container } = render(
      <ThemeProvider theme={lightTheme}>
        <Table
          colCount={COL_COUNT}
          rowCount={ROW_COUNT}
          footer={<TFooter icon={<span>icon</span>}>Add another field to this collection type</TFooter>}
        >
          <Thead>
            <Tr>
              <Th action={<span>Some action</span>}>
                <BaseCheckbox aria-label="Select all entries" />
              </Th>
              <Th>
                <TableLabel>ID</TableLabel>
              </Th>
              <Th>
                <TableLabel>Cover</TableLabel>
              </Th>
              <Th>
                <TableLabel>Description</TableLabel>
              </Th>
              <Th>
                <TableLabel>Categories</TableLabel>
              </Th>
              <Th>
                <TableLabel>Contact</TableLabel>
              </Th>
              <Th>
                <VisuallyHidden>Actions</VisuallyHidden>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {entries.map((entry) => (
              <Tr key={entry.id}>
                <Td>
                  <BaseCheckbox aria-label={`Select ${entry.contact}`} />
                </Td>
                <Td>
                  <Text textColor="neutral600">{entry.id}</Text>
                </Td>
                <Td>
                  <Avatar src={entry.cover} alt={entry.contact} />
                </Td>
                <Td>
                  <Text textColor="neutral600">{entry.description}</Text>
                </Td>
                <Td>
                  <Text textColor="neutral600">{entry.category}</Text>
                </Td>
                <Td>
                  <Text textColor="neutral600">{entry.contact}</Text>
                </Td>
                <Td>
                  <IconButton onClick={() => console.log('edit')} label="Edit" noBorder icon={<EditIcon />} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </ThemeProvider>,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        box-shadow: 0px 1px 4px rgba(33,33,52,0.1);
      }

      .c1 {
        background: #ffffff;
      }

      .c3 {
        padding-right: 12px;
        padding-left: 12px;
      }

      .c22 {
        background: #eaeaef;
      }

      .c24 {
        background: #f0f0ff;
        padding: 20px;
      }

      .c26 {
        background: #d9d8ff;
      }

      .c28 {
        padding-left: 12px;
      }

      .c5 {
        width: 100%;
        white-space: nowrap;
      }

      .c2 {
        position: relative;
        border-radius: 4px 4px 0 0;
      }

      .c2:before {
        background: linear-gradient(90deg,#000000 0%,rgba(0,0,0,0) 100%);
        opacity: 0.2;
        position: absolute;
        height: 100%;
        box-shadow: 0px 1px 4px rgba(33,33,52,0.1);
        width: 8px;
        left: 0;
      }

      .c2:after {
        background: linear-gradient(270deg,#000000 0%,rgba(0,0,0,0) 100%);
        opacity: 0.2;
        position: absolute;
        height: 100%;
        box-shadow: 0px 1px 4px rgba(33,33,52,0.1);
        width: 8px;
        right: 0;
        top: 0;
      }

      .c4 {
        overflow-x: auto;
      }

      .c15 {
        border: 0;
        -webkit-clip: rect(0 0 0 0);
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      .c11 {
        margin: 0;
        height: 18px;
        width: 18px;
        border-radius: 4px;
        border: 1px solid #c0c0cf;
        -webkit-appearance: none;
        background-color: #ffffff;
      }

      .c11:checked {
        background-color: #4945ff;
        border: 1px solid #4945ff;
      }

      .c11:checked:after {
        content: '';
        display: block;
        position: relative;
        background: url(test-file-stub) no-repeat no-repeat center center;
        width: 10px;
        height: 10px;
        left: 50%;
        top: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
      }

      .c11:checked:disabled:after {
        background: url(test-file-stub) no-repeat no-repeat center center;
      }

      .c11:disabled {
        background-color: #dcdce4;
        border: 1px solid #c0c0cf;
      }

      .c11:indeterminate {
        background-color: #4945ff;
        border: 1px solid #4945ff;
      }

      .c11:indeterminate:after {
        content: '';
        display: block;
        position: relative;
        color: white;
        height: 2px;
        width: 10px;
        background-color: #ffffff;
        left: 50%;
        top: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
      }

      .c11:indeterminate:disabled {
        background-color: #dcdce4;
        border: 1px solid #c0c0cf;
      }

      .c11:indeterminate:disabled:after {
        background-color: #8e8ea9;
      }

      .c6 {
        border-bottom: 1px solid #eaeaef;
      }

      .c16 tr:last-of-type {
        border-bottom: none;
      }

      .c7 {
        border-bottom: 1px solid #eaeaef;
      }

      .c7 td,
      .c7 th {
        padding: 0 16px;
      }

      .c7 td:first-of-type,
      .c7 th:first-of-type {
        padding: 0 4px;
      }

      .c10 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c8 {
        vertical-align: middle;
        line-height: 3.25rem;
        text-align: left;
        color: #666687;
        outline-offset: -4px;
      }

      .c8 input {
        vertical-align: sub;
      }

      .c9 svg {
        height: 0.25rem;
      }

      .c23 {
        height: 1px;
        margin: 0;
        border: none;
      }

      .c12 {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.43;
        color: #32324d;
      }

      .c17 {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.43;
        color: #666687;
      }

      .c29 {
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1.33;
        color: #4945ff;
      }

      .c13 {
        font-weight: 600;
        line-height: 1.14;
      }

      .c14 {
        font-weight: 600;
        font-size: 0.6875rem;
        line-height: 1.45;
        text-transform: uppercase;
      }

      .c27 {
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 50%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c27 svg {
        height: 0.625rem;
        width: 0.625rem;
      }

      .c27 svg path {
        fill: #4945ff;
      }

      .c25 {
        border-radius: 0 0 4px 4px;
        display: block;
        width: 100%;
        border: none;
      }

      .c19 {
        border-radius: 50%;
        display: block;
        position: relative;
      }

      .c18 {
        position: relative;
        width: 26px;
        height: 26px;
      }

      .c20 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        cursor: pointer;
        padding: 8px;
        border-radius: 4px;
        background: #ffffff;
        border: 1px solid #dcdce4;
      }

      .c20 svg {
        height: 12px;
        width: 12px;
      }

      .c20 svg > g,
      .c20 svg path {
        fill: #ffffff;
      }

      .c20[aria-disabled='true'] {
        pointer-events: none;
      }

      .c21 {
        border: none;
      }

      .c21 svg > g,
      .c21 svg path {
        fill: #8e8ea9;
      }

      .c21:hover svg > g,
      .c21:hover svg path {
        fill: #666687;
      }

      .c21:active svg > g,
      .c21:active svg path {
        fill: #a5a5ba;
      }

      .c21[aria-disabled='true'] {
        background-color: #eaeaef;
      }

      .c21[aria-disabled='true'] svg path {
        fill: #666687;
      }

      <div
        class="c0"
      >
        <div
          class="c1 c2"
        >
          <div
            class="c3 c4"
          >
            <table
              aria-colcount="7"
              aria-rowcount="6"
              class="c5"
            >
              <thead
                class="c6"
              >
                <tr
                  aria-rowindex="1"
                  class="c7"
                >
                  <th
                    aria-colindex="1"
                    class="c8 c9"
                  >
                    <div
                      class="c10"
                    >
                      <input
                        aria-label="Select all entries"
                        class="c11"
                        tabindex="0"
                        type="checkbox"
                      />
                      <div
                        class=""
                      >
                        <span>
                          Some action
                        </span>
                      </div>
                    </div>
                  </th>
                  <th
                    aria-colindex="2"
                    class="c8 c9"
                    tabindex="-1"
                  >
                    <div
                      class="c10"
                    >
                      <span
                        class="c12 c13 c14"
                      >
                        ID
                      </span>
                    </div>
                  </th>
                  <th
                    aria-colindex="3"
                    class="c8 c9"
                    tabindex="-1"
                  >
                    <div
                      class="c10"
                    >
                      <span
                        class="c12 c13 c14"
                      >
                        Cover
                      </span>
                    </div>
                  </th>
                  <th
                    aria-colindex="4"
                    class="c8 c9"
                    tabindex="-1"
                  >
                    <div
                      class="c10"
                    >
                      <span
                        class="c12 c13 c14"
                      >
                        Description
                      </span>
                    </div>
                  </th>
                  <th
                    aria-colindex="5"
                    class="c8 c9"
                    tabindex="-1"
                  >
                    <div
                      class="c10"
                    >
                      <span
                        class="c12 c13 c14"
                      >
                        Categories
                      </span>
                    </div>
                  </th>
                  <th
                    aria-colindex="6"
                    class="c8 c9"
                    tabindex="-1"
                  >
                    <div
                      class="c10"
                    >
                      <span
                        class="c12 c13 c14"
                      >
                        Contact
                      </span>
                    </div>
                  </th>
                  <th
                    aria-colindex="7"
                    class="c8 c9"
                    tabindex="-1"
                  >
                    <div
                      class="c10"
                    >
                      <div
                        class="c15"
                      >
                        Actions
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody
                class="c16"
              >
                <tr
                  aria-rowindex="2"
                  class="c7"
                >
                  <td
                    aria-colindex="1"
                    class="c8"
                  >
                    <input
                      aria-label="Select Leon Lafrite"
                      class="c11"
                      tabindex="-1"
                      type="checkbox"
                    />
                  </td>
                  <td
                    aria-colindex="2"
                    class="c8"
                    tabindex="-1"
                  >
                    <span
                      class="c17"
                    >
                      0
                    </span>
                  </td>
                  <td
                    aria-colindex="3"
                    class="c8"
                    tabindex="-1"
                  >
                    <span>
                      <div
                        class="c18"
                      >
                        <img
                          alt="Leon Lafrite"
                          class="c19"
                          height="26px"
                          src="https://avatars.githubusercontent.com/u/3874873?v=4"
                          width="26px"
                        />
                      </div>
                    </span>
                  </td>
                  <td
                    aria-colindex="4"
                    class="c8"
                    tabindex="-1"
                  >
                    <span
                      class="c17"
                    >
                      Chez Léon is a human sized Parisian...
                    </span>
                  </td>
                  <td
                    aria-colindex="5"
                    class="c8"
                    tabindex="-1"
                  >
                    <span
                      class="c17"
                    >
                      French cuisine
                    </span>
                  </td>
                  <td
                    aria-colindex="6"
                    class="c8"
                    tabindex="-1"
                  >
                    <span
                      class="c17"
                    >
                      Leon Lafrite
                    </span>
                  </td>
                  <td
                    aria-colindex="7"
                    class="c8"
                  >
                    <span>
                      <button
                        aria-disabled="false"
                        aria-labelledby="tooltip-123"
                        class="c20 c21"
                        tabindex="-1"
                        type="button"
                      >
                        <svg
                          fill="none"
                          height="1em"
                          viewBox="0 0 24 24"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clip-rule="evenodd"
                            d="M23.604 3.514c.528.528.528 1.36 0 1.887l-2.622 2.607-4.99-4.99L18.6.396a1.322 1.322 0 011.887 0l3.118 3.118zM0 24v-4.99l14.2-14.2 4.99 4.99L4.99 24H0z"
                            fill="#212134"
                            fill-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </span>
                  </td>
                </tr>
                <tr
                  aria-rowindex="3"
                  class="c7"
                >
                  <td
                    aria-colindex="1"
                    class="c8"
                  >
                    <input
                      aria-label="Select Leon Lafrite"
                      class="c11"
                      tabindex="-1"
                      type="checkbox"
                    />
                  </td>
                  <td
                    aria-colindex="2"
                    class="c8"
                    tabindex="-1"
                  >
                    <span
                      class="c17"
                    >
                      1
                    </span>
                  </td>
                  <td
                    aria-colindex="3"
                    class="c8"
                    tabindex="-1"
                  >
                    <span>
                      <div
                        class="c18"
                      >
                        <img
                          alt="Leon Lafrite"
                          class="c19"
                          height="26px"
                          src="https://avatars.githubusercontent.com/u/3874873?v=4"
                          width="26px"
                        />
                      </div>
                    </span>
                  </td>
                  <td
                    aria-colindex="4"
                    class="c8"
                    tabindex="-1"
                  >
                    <span
                      class="c17"
                    >
                      Chez Léon is a human sized Parisian...
                    </span>
                  </td>
                  <td
                    aria-colindex="5"
                    class="c8"
                    tabindex="-1"
                  >
                    <span
                      class="c17"
                    >
                      French cuisine
                    </span>
                  </td>
                  <td
                    aria-colindex="6"
                    class="c8"
                    tabindex="-1"
                  >
                    <span
                      class="c17"
                    >
                      Leon Lafrite
                    </span>
                  </td>
                  <td
                    aria-colindex="7"
                    class="c8"
                  >
                    <span>
                      <button
                        aria-disabled="false"
                        aria-labelledby="tooltip-123"
                        class="c20 c21"
                        tabindex="-1"
                        type="button"
                      >
                        <svg
                          fill="none"
                          height="1em"
                          viewBox="0 0 24 24"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clip-rule="evenodd"
                            d="M23.604 3.514c.528.528.528 1.36 0 1.887l-2.622 2.607-4.99-4.99L18.6.396a1.322 1.322 0 011.887 0l3.118 3.118zM0 24v-4.99l14.2-14.2 4.99 4.99L4.99 24H0z"
                            fill="#212134"
                            fill-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <hr
            class="c22 c23"
          />
          <button
            class="c24 c25"
          >
            <div
              class="c10"
            >
              <div
                aria-hidden="true"
                class="c26 c27"
              >
                <span>
                  icon
                </span>
              </div>
              <div
                class="c28"
              >
                <span
                  class="c29"
                >
                  Add another field to this collection type
                </span>
              </div>
            </div>
          </button>
        </div>
      </div>
    `);
  });
});
