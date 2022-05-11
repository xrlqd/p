const model = () => {
    const rand = (from, to) => Math.floor((Math.random() * (to - from + 1)) + from);
    const randArr = arr => arr[rand(0, arr.length - 1)];
    
    const people = ['Player1', 'Player2', 'Player3', 'Player4', 'Player5'];
    const roles = ['Support', 'Damage Dealer', 'Assassin', 'Tank', 'Hybrid'];
    const races = ['Human', 'Robot', 'Animal'];
    const classes = {
        'Damage Dealer' : ['Nani', 'Brock', 'Spike', 'Shelly', 'Nita', 'Colt', 'Jessie', 'Dynamike',
         'Bo', 'Emz', 'Carl', 'Piper', 'Bibi', 'Bea', 'Tara', 'Squeak', '8-Bit', 'Tick', 'Griff', 'Penny', 
         'Mr. P', 'Rico', 'Barley', 'Colette', 'Belle', 'Grom', 'Surge', 'Amber', 'Meg', 'Lola', 'Fang',
         'Eve', 'Janet'],
        'Support' : ['Pam', 'Sprout', 'Max', 'Colonel Ruffs', 'Gene', 'Byron', 'Sandy'],
        'Tank' : ['Rosa', 'El Primo', 'Frank', 'Bull', 'Ash', 'Jacky'],
        'Assassin' : ['Edgar', 'Crow', 'Buzz', 'Stu', 'Mortis', 'Leon'],
        'Hybrid' : ['Darryl', 'Gale', 'Lou']
    }
    
    const users = people.map(name => {
        const role = randArr(roles);
        return  {
            name, role,
            race    : randArr(races),
            classUser   : randArr(classes[role])
        }
    });

    return users;
}

const view = users => {4
    const domUsers = document.querySelector('.users');

    const htmlUsers = users.map(({ name, race, role, classUser }) => {
        return `<div>
            <img src="img/${ classUser }.jpg" class="img_class">
            <h2>${ name }</h3>
            <h4>${ race } ${ role } ${ classUser }</h4>
            <img src="img/${ role.toLowerCase() }.png" class="img_role">
        </div>`;
    }).join('');

    domUsers.innerHTML = htmlUsers;
}

const controller = () => {
    const users = model();
    view(users);
}

controller();