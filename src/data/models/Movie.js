export class Movie {
    constructor({
        id = '',
        title = '',
        year = 0,
        director = [],
        genre = [],
        actors = [],
        plot = null,
        poster = '',
        rating = 0.0,
    }) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.director = director;
        this.genre = genre;
        this.actors = actors;
        this.plot = plot;
        this.poster = poster;
        this.rating = rating;
    }

    static fromJson(json) {
        return new Movie(
            json.id,
            json.title,
            json.year,
            json.director,
            json.genre,
            json.actors,
            json.plot,
            json.poster,
            json.rating,
        );
    }

    toJson() {
        return {
            id: this.id,
            title: this.title,
            year: this.year,
            director: this.director,
            genre: this.genre,
            actors: this.actors,
            plot: this.plot,
            poster: this.poster,
            rating: this.rating,
        };
    }
}
