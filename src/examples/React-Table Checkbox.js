import React from "react";

const ReactTable = window.ReactTable.default;

class MyTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = { selected: {}, selectAll: 0, data: makeData() };

        this.toggleRow = this.toggleRow.bind(this);
    }

    toggleRow(firstName) {
        const newSelected = Object.assign({}, this.state.selected);
        newSelected[firstName] = !this.state.selected[firstName];
        this.setState({
            selected: newSelected,
            selectAll: 2
        });
    }

    toggleSelectAll() {
        let newSelected = {};

        if (this.state.selectAll === 0) {
            this.state.data.forEach(x => {
                newSelected[x.firstName] = true;
            });
        }

        this.setState({
            selected: newSelected,
            selectAll: this.state.selectAll === 0 ? 1 : 0
        });
    }

    render() {
        const columns = [
            {
                Header: "Name",
                columns: [
                    {
                        id: "checkbox",
                        accessor: "",
                        Cell: ({ original }) => {
                            return (
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    checked={this.state.selected[original.firstName] === true}
                                    onChange={() => this.toggleRow(original.firstName)}
                                />
                            );
                        },
                        Header: x => {
                            return (
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    checked={this.state.selectAll === 1}
                                    ref={input => {
                                        if (input) {
                                            input.indeterminate = this.state.selectAll === 2;
                                        }
                                    }}
                                    onChange={() => this.toggleSelectAll()}
                                />
                            );
                        },
                        sortable: false,
                        width: 45
                    },
                    {
                        Header: "First Name",
                        accessor: "firstName"
                    },
                    {
                        Header: "Last Name",
                        id: "lastName",
                        accessor: d => d.lastName
                    }
                ]
            },
            {
                Header: "Info",
                columns: [
                    {
                        Header: "Age",
                        accessor: "age"
                    }
                ]
            }
        ];

        return (
            <div>
                <ReactTable
                    data={this.state.data}
                    columns={columns}
                    defaultSorted={[{ id: "firstName", desc: false }]}
                />
            </div>
        );
    }
}

function makeData() {
    return [
        {
            firstName: "judge",
            lastName: "babies",
            age: 16
        },
        {
            firstName: "quarter",
            lastName: "driving",
            age: 17
        },
        {
            firstName: "division",
            lastName: "society",
            age: 3
        },
        {
            firstName: "lamp",
            lastName: "point",
            age: 2
        },
        {
            firstName: "argument",
            lastName: "insurance",
            age: 13
        },
        {
            firstName: "pets",
            lastName: "fan",
            age: 27
        },
        {
            firstName: "learning",
            lastName: "board",
            age: 9
        },
        {
            firstName: "observation",
            lastName: "drink",
            age: 28
        },
        {
            firstName: "burst",
            lastName: "glove",
            age: 1
        },
        {
            firstName: "acoustics",
            lastName: "animal",
            age: 19
        },
        {
            firstName: "beetle",
            lastName: "branch",
            age: 25
        },
        {
            firstName: "invention",
            lastName: "servant",
            age: 14
        },
        {
            firstName: "letters",
            lastName: "driving",
            age: 12
        },
        {
            firstName: "seashore",
            lastName: "metal",
            age: 18
        },
        {
            firstName: "cat",
            lastName: "stranger",
            age: 26
        },
        {
            firstName: "group",
            lastName: "dinner",
            age: 20
        },
        {
            firstName: "mom",
            lastName: "pipe",
            age: 27
        },
        {
            firstName: "desk",
            lastName: "pail",
            age: 6
        },
        {
            firstName: "oranges",
            lastName: "interest",
            age: 22
        },
        {
            firstName: "umbrella",
            lastName: "legs",
            age: 9
        },
        {
            firstName: "carpenter",
            lastName: "apparel",
            age: 19
        },
        {
            firstName: "seat",
            lastName: "wrench",
            age: 14
        },
        {
            firstName: "carpenter",
            lastName: "steam",
            age: 27
        },
        {
            firstName: "chess",
            lastName: "bread",
            age: 21
        },
        {
            firstName: "men",
            lastName: "pie",
            age: 5
        },
        {
            firstName: "group",
            lastName: "action",
            age: 21
        },
        {
            firstName: "coil",
            lastName: "mine",
            age: 11
        },
        {
            firstName: "care",
            lastName: "partner",
            age: 17
        },
        {
            firstName: "queen",
            lastName: "cows",
            age: 20
        },
        {
            firstName: "wilderness",
            lastName: "cracker",
            age: 24
        },
        {
            firstName: "chair",
            lastName: "scarecrow",
            age: 5
        },
        {
            firstName: "cast",
            lastName: "nation",
            age: 16
        },
        {
            firstName: "fear",
            lastName: "wave",
            age: 28
        },
        {
            firstName: "cook",
            lastName: "drug",
            age: 2
        },
        {
            firstName: "thrill",
            lastName: "marble",
            age: 25
        },
        {
            firstName: "ship",
            lastName: "muscle",
            age: 29
        },
        {
            firstName: "drug",
            lastName: "suit",
            age: 13
        },
        {
            firstName: "edge",
            lastName: "statement",
            age: 19
        },
        {
            firstName: "chickens",
            lastName: "start",
            age: 20
        },
        {
            firstName: "donkey",
            lastName: "laugh",
            age: 14
        },
        {
            firstName: "tiger",
            lastName: "tendency",
            age: 27
        },
        {
            firstName: "steam",
            lastName: "argument",
            age: 17
        },
        {
            firstName: "riddle",
            lastName: "adjustment",
            age: 15
        },
        {
            firstName: "silver",
            lastName: "women",
            age: 2
        },
        {
            firstName: "month",
            lastName: "babies",
            age: 13
        },
        {
            firstName: "van",
            lastName: "flowers",
            age: 29
        },
        {
            firstName: "yak",
            lastName: "book",
            age: 5
        },
        {
            firstName: "quicksand",
            lastName: "fall",
            age: 11
        },
        {
            firstName: "beggar",
            lastName: "dinner",
            age: 4
        },
        {
            firstName: "money",
            lastName: "mind",
            age: 0
        }
    ];
}
