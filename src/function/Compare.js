export function comparePlan(a, b) {
    const bandA = a.total_scores.plan;
    const bandB = b.total_scores.plan;
    
    let comparison = 0;
    if (bandA > bandB) {
      comparison = -1;
    } else if (bandA < bandB) {
      comparison = 1;
    }
    return comparison;
  }
  export function compareID(a, b) {
    const bandA = a.id;
    const bandB = b.id;
    
    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }
  export function comparePresentation(a, b) {
    const bandA = a.total_scores.presentation;
    const bandB = b.total_scores.presentation;
    
    let comparison = 0;
    if (bandA > bandB) {
      comparison = -1;
    } else if (bandA < bandB) {
      comparison = 1;
    }
    return comparison;
  }

  export function compareCode(a, b) {
    const bandA = a.total_scores.code;
    const bandB = b.total_scores.code;
    
    let comparison = 0;
    if (bandA > bandB) {
      comparison = -1;
    } else if (bandA < bandB) {
      comparison = 1;
    }
    return comparison;
  }

  export function compareDesign(a, b) {
    const bandA = a.total_scores.design;
    const bandB = b.total_scores.design;
    
    let comparison = 0;
    if (bandA > bandB) {
      comparison = -1;
    } else if (bandA < bandB) {
      comparison = 1;
    }
    return comparison;
  }

  export function compareCommunication(a, b) {
    const bandA = a.total_scores.communication;
    const bandB = b.total_scores.communication;
    
    let comparison = 0;
    if (bandA > bandB) {
      comparison = -1;
    } else if (bandA < bandB) {
      comparison = 1;
    }
    return comparison;
  }
  export function compareTotal(a, b) {
    const bandA = a.total;
    const bandB = b.total;
    
    let comparison = 0;
    if (bandA > bandB) {
      comparison = -1;
    } else if (bandA < bandB) {
      comparison = 1;
    }
    return comparison;
  }