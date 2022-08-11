import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getAllMovies():Movie[]{
    return this.movies;
  }

  getMovieById(id:number):Movie {
    return this.movies.find(m => m.id == id)!;
  }
  movies:Movie[] = [
    {
      id: 0,
      name: "Shrek",
      rating: 10,
      description: "Once upon a time, in a far away swamp, there lived an ogre named Shrek (Mike Myers) whose precious solitude is suddenly shattered by an invasion of annoying fairy tale characters. They were all banished from their kingdom by the evil Lord Farquaad (John Lithgow). Determined to save their home -- not to mention his -- Shrek cuts a deal with Farquaad and sets out to rescue Princess Fiona (Cameron Diaz) to be Farquaad's bride. Rescuing the Princess may be small compared to her deep, dark secret.",
      image: "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
    },
    {
      id: 1,
      name: "Nemo",
      rating: 9,
      description: "Marlin (Albert Brooks), a clown fish, is overly cautious with his son, Nemo (Alexander Gould), who has a foreshortened fin. When Nemo swims too close to the surface to prove himself, he is caught by a diver, and horrified Marlin must set out to find him. A blue reef fish named Dory (Ellen DeGeneres) -- who has a really short memory -- joins Marlin and complicates the encounters with sharks, jellyfish, and a host of ocean dangers. Meanwhile, Nemo plots his escape from a dentist's fish tank.",
      image: "https://lumiere-a.akamaihd.net/v1/images/p_findingnemo_19752_05271d3f.jpeg?region=0%2C0%2C540%2C810"
    },
    {
      id: 2,
      name: "F9",
      rating: 9,
      description: "Dom Toretto is living the quiet life off the grid with Letty and his son, but they know that danger always lurks just over the peaceful horizon. This time, that threat forces Dom to confront the sins of his past to save those he loves most. His crew soon comes together to stop a world-shattering plot by the most skilled assassin and high-performance driver they've ever encountered -- Dom's forsaken brother.",
      image: "https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg"
    },
    {
      id: 3,
      name: "Notebook",
      rating: 9,
      description: "In 1940s South Carolina, mill worker Noah Calhoun (Ryan Gosling) and rich girl Allie (Rachel McAdams) are desperately in love. But her parents don't approve. When Noah goes off to serve in World War II, it seems to mark the end of their love affair. In the interim, Allie becomes involved with another man (James Marsden). But when Noah returns to their small town years later, on the cusp of Allie's marriage, it soon becomes clear that their romance is anything but over.",
      image: "https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 4,
      name: "Titanic",
      rating: 10,
      description: "James Cameron's Titanic is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line and, at the time, the largest moving object ever built. She was the most luxurious liner of her era -- the ship of dreams -- which ultimately carried over 1,500 people to their death in the ice cold waters of the North Atlantic in the early hours of April 15, 1912.",
      image: "https://m.media-amazon.com/images/I/51mTtUGvUCL.jpg"
    },
    {
      id: 5,
      name: "Sonic",
      rating: 9,
      description: "The world needed a hero -- it got a hedgehog. Powered with incredible speed, Sonic embraces his new home on Earth -- until he accidentally knocks out the power grid, sparking the attention of uncool evil genius Dr. Robotnik. Now, it's supervillain vs. supersonic in an all-out race across the globe to stop Robotnik from using Sonic's unique power to achieve world domination.",
      image: "https://themoviespoiler.com/wp-content/uploads/2020/02/sonic_the_hedgehog_ver4_xlg.jpg"
    },
    {
      id: 6,
      name: "Morbius",
      rating:11,
      description:"Dangerously ill with a rare blood disorder and determined to save others from the same fate, Dr. Morbius attempts a desperate gamble. While at first it seems to be a radical success, a darkness inside of him is soon unleashed.",
      image:"https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Morbius_%28film%29_poster.jpg/220px-Morbius_%28film%29_poster.jpg"
    },
  
  ];
}
