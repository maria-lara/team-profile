const createCards = (answers) => {
    
    if (answers.role === 'Manager') {
        return `
        <div class="card manager" style="width: 20rem;">
            <div class="card-header">
                <h2 class="card-title">${answers.employee}</h2>
                <h2><i class="far fa-user"></i>${answers.role}</h2>
            </div>
            <div class="card-body">
                <ul>
                    <li>Employee ID: ${answers.id}</li>
                    <li>Email: ${answers.email}</li>
                    <li>Office Number: ${answers.officeNumber}</li>
                </ul>
            </div>
        </div>
        `
    } else if (answers.role === 'Engineer') {
        return `
        <div class="card engineer"  style="width: 20rem;">
            <div class="card-header">
                <h2 class="card-title">${answers.employee}</h2>
                <h2><i class="far fa-user"></i>${answers.role}</h2>
            </div>
            <div class="card-body">
                <ul>
                    <li>Employee ID: ${answers.id}</li>
                    <li>Email: ${answers.email}</li>
                    <li>Office Number: ${answers.officeNumber}</li>
                    <li>GitHub Username: ${answers.github}</li>
                </ul>
            </div>
        </div>
        `
    } else if (answers.role === 'Intern') {
        return `
        <div class="card intern"  style="width: 20rem;">
            <div class="card-header">
                <h2 class="card-title">${answers.employee}</h2>
                <h2><i class="far fa-user"></i>${answers.role}</h2>
            </div>
            <div class="card-body">
                <ul>
                    <li>Employee ID: ${answers.id}</li>
                    <li>Email: ${answers.email}</li>
                    <li>Office Number: ${answers.officeNumber}</li>
                    <li>Current School: ${answers.school}</li>
                </ul>
            </div>
        </div>
        `
    }
}

module.exports = createCards;