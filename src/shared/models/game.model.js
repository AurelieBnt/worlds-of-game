export class Game{

    constructor (id, name, type, description, date, adress, city, maxPlayers, minPayers, players) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.description = description;
        this.date = date;
        this.adress = adress;
        this.city = city;
        this.maxPlayers = maxPlayers;
        this.minPlayers = minPlayers;
        this.players = players;
    }

}