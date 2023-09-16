const EmployeeReducer = (state, action) => {

    switch (action.type) {

        case "CREATE_EMPLOYEE_START":
            return {
              ...state,
              isFetching: true,
              error: false,
            };
          case "CREATE_EMPLOYEE_SUCCESS":
            return {
              employees: [...state.employees, action.payload],
              isFetching: false,
              error: false,
            };
          case "CREATE_EMPLOYEE_FAILURE":
            return {
              ...state,
              isFetching: false,
              error: true,
            };

     

            case "GET_EMPLOYEE_START":
              return {
                employees: [],
                isFetching: true,
                error: false,
              };
            case "GET_EMPLOYEE_SUCCESS":
              return {
                employees: action.payload,
                isFetching: false,
                error: false,
              };
            case "GET_EMPLOYEE_FAILURE":
              return {
                employees: [],
                isFetching: false,
                error: true,
              };





              case "DELETE_LIST_START":
                return {
                  ...state,
                  isFetching: true,
                  error: false,
                };
              case "DELETE_LIST_SUCCESS":
                return {
                  employees: state.employees.filter((employee) => employee._id !== action.payload),
                  isFetching: false,
                  error: false,
                };
              case "DELETE_LIST_FAILURE":
                return {
                  ...state,
                  isFetching: false,
                  error: true,
                };
      




                case "UPDATE_LIST_START":
                  return {
                    ...state,
                    isFetching: true,
                    error: false,
                  };
      
      
      
      
                case "UPDATE_LIST_SUCCESS":
                  const updatedList = action.payload;
                  const updatedLists = state.employees.map((employee) =>
                  employee._id === updatedList._id ? updatedList : employee
                  );
                  return {
                    employees: updatedLists,
                    isFetching: false,
                    error: false,
                  };
            
                case "UPDATE_LIST_FAILURE":
                  return {
                    ...state,
                    isFetching: false,
                    error: true,
                  }
      
      






              default:
                return state;

    }
    }

export default EmployeeReducer;
