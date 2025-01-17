import { createContext, useReducer, useContext, type Dispatch } from 'react';
import { nanoid } from 'nanoid';

type jobType = {
  id: string;
  title: string;
  ctc: string;
};

type InitialStateType = {
  notice_id: string;
  company_name: string;
  company_website: string;
  about_company: string;
  // job: Array<{ job_role: string; ctc: string }>;
  jobs: jobType[];
  bond: boolean;
  bond_period: string;
  // eligibility criteria
  degree_allowed: string[];
  branches_allowed: string[];
  max_backlog: string;
  tenth_perc: string;
  twelfth_perc: string;
  diploma_perc: string;
  ug_perc: string;
  pg_perc: string;
  min_gap: string;

  // other details:
  form_link: string;
  form_submission_date: Date;
  form_submission_time: Date;
  extra_note: string;
};

const initialState = {
  notice_id: '',
  company_name: '',
  company_website: '',
  about_company: '',
  jobs: [{ id: nanoid(), title: '', ctc: '' }],
  bond: false,
  bond_period: '',
  // eligibility criteria
  degree_allowed: [],
  branches_allowed: [],
  max_backlog: '',
  tenth_perc: '',
  twelfth_perc: '',
  diploma_perc: '',
  ug_perc: '',
  pg_perc: '',
  min_gap: '',

  // other details:
  form_link: '',
  form_submission_date: new Date(),
  form_submission_time: new Date(),
  extra_note: '',
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export function changeInput(payload: any) {
  return {
    type: 'CHANGE_INPUT',
    payload,
  };
}

export function changeJobInput(payload: any) {
  return {
    type: 'CHANGE_JOB_INPUT',
    payload,
  };
}

export function addJob() {
  return {
    type: 'ADD_JOB',
    payload: null,
  };
}

export function removeJob(payload: any) {
  return {
    type: 'REMOVE_JOB',
    payload,
  };
}

export function addDegree(payload: any) {
  return {
    type: 'PUSH_DEGREE',
    payload,
  };
}

export function addBranch(payload: any) {
  return {
    type: 'PUSH_BRANCH',
    payload,
  };
}

export function addBacklogs(payload: any) {
  return {
    type: 'PUSH_BACKLOGS',
    payload,
  };
}

export function addBond(payload: any) {
  return {
    type: 'PUSH_BOND',
    payload,
  };
}

export function addDate(payload: any) {
  return {
    type: 'PUSH_DATE',
    payload,
  };
}

export function addTime(payload: any) {
  return {
    type: 'PUSH_TIME',
    payload,
  };
}

// export function addMultiSelect(payload: any) {
//   return {
//     type: "PUSH_ITEMS",
//     payload,
//   };
// }

const reducers = (state: any, action: any) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        ...action.payload,
      };
    case 'ADD_JOB':
      return {
        ...state,
        jobs: [
          ...state.jobs,
          {
            id: nanoid(),
            title: '',
            ctc: '',
          },
        ],
      };
    case 'REMOVE_JOB':
      return {
        ...state,
        jobs: state.jobs.filter((job: jobType) => job.id !== action.payload.id),
      };
    case 'CHANGE_JOB_INPUT':
      return {
        ...state,
        jobs: state.jobs.map((job: jobType) => {
          if (job.id === action.payload.id) {
            return {
              ...job,
              [action.payload.values.name]: action.payload.values.value,
            };
          }
        }),
      };
    case 'PUSH_DEGREE':
      return {
        ...state,
        degree_allowed: action.payload,
      };
    // case "PUSH_ITEMS":
    //   return {
    //     ...state,
    //     degree_allowed: action.payload,
    //   };
    case 'PUSH_BRANCH':
      return {
        ...state,
        branches_allowed: action.payload,
      };
    case 'PUSH_BACKLOGS':
      return {
        ...state,
        max_backlog: action.payload,
      };
    case 'PUSH_BOND':
      return {
        ...state,
        bond: action.payload,
      };
    case 'PUSH_DATE':
      return {
        ...state,
        form_submission_date: action.payload,
      };
    case 'PUSH_TIME':
      return {
        ...state,
        form_submission_time: action.payload,
      };
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
