const initialState = { acquisSkill: [] }

function toggleAcquis(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_ACQUIS':
      const acquisSkillIndex = state.acquisSkill.findIndex(item => item.id === action.value.id)
      if (acquisSkillIndex !== -1) {
        nextState = {
          ...state,
          acquisSkill: state.acquisSkill.filter( (item, index) => index !== acquisSkillIndex)
        }
      }
      else {
        nextState = {
          ...state,
          acquisSkill: [...state.acquisSkill, action.value]
        }
      }
      return nextState || state
  default:
    return state
  }
}

export default toggleAcquis