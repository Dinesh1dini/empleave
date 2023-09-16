const LeaveReducer = (state, action) => {

  switch (action.type) {

      case "CREATE_LEAVETYPE_START":
          return {
            ...state,
            isFetching: true,
            error: false,
          };
        case "CREATE_LEAVETYPE_SUCCESS":
          return {
            leavetypes: [...state.leavetypes, action.payload],
            isFetching: false,
            error: false,
          };
        case "CREATE_LEAVETYPE_FAILURE":
          return {
            ...state,
            isFetching: false,
            error: true,
          };

   

          case "GET_LEAVETYPE_START":
            return {
              leavetypes: [],
              isFetching: true,
              error: false,
            };
          case "GET_LEAVETYPE_SUCCESS":
            return {
              leavetypes: action.payload,
              isFetching: false,
              error: false,
            };
          case "GET_LEAVETYPE_FAILURE":
            return {
              leavetypes: [],
              isFetching: false,
              error: true,
            };





            case "DELETE_LEAVETYPE_START":
              return {
                ...state,
                isFetching: true,
                error: false,
              };
            case "DELETE_LEAVETYPE_SUCCESS":
              return {
                leavetypes: state.leavetypes.filter((leavetype) => leavetype._id !== action.payload),
                isFetching: false,
                error: false,
              };
            case "DELETE_LEAVETYPE_FAILURE":
              return {
                ...state,
                isFetching: false,
                error: true,
              };
    




              case "UPDATE_LEAVETYPE_START":
                return {
                  ...state,
                  isFetching: true,
                  error: false,
                };
    
    
    
    
              case "UPDATE_LEAVETYPE_SUCCESS":
                const updatedList = action.payload;
                const updatedLists = state.leavetypes.map((leavetype) =>
                leavetype._id === updatedList._id ? updatedList : leavetype
                );
                return {
                  leavetypes: updatedLists,
                  isFetching: false,
                  error: false,
                };
          
              case "UPDATE_LEAVETYPE_FAILURE":
                return {
                  ...state,
                  isFetching: false,
                  error: true,
                }
    
    

              default:
              return state;

  }
  }

export default LeaveReducer;
