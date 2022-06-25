import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";

const projects: {
  key: string;
  name: string;
  description: string;
  link: string;
  image?: string;
  software?: string[];
}[] = [
  {
    key: "tables",
    name: "Wikidata tables",
    description: "",
    link: "https://wikidata-table.vercel.app/",
    software: ["react-admin"],
  },
  {
    key: "entitree",
    name: Number("Entitree"),
    description: "Tree diagrams for Wikidata",
    link: "https://entitree.com/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Family_tree_of_Elizabeth_II.png/640px-Family_tree_of_Elizabeth_II.png",
  },
  {
    key: "charts",
    name: "Wikidata charts",
    description:
      "Wikidata Charts using SPARQL and React to draw line charts of properties or queries",
    link: "https://wikidata-charts.vercel.app/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/80/Wikidata_Charts_-_Screenshot_of_employees_of_tech_companies.png",
    software: ["recharts"],
  },
  {
    key: "chordstop",
    name: "Chordstop",
    description: "Show chords",
    link: "https://chordstop.vercel.app/",
  },
  {
    key: "images",
    name: "Entitree images",
    description: "",
    link: "https://images.entitree.com/",
    software: ["react-admin"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Screenshot_from_2022-06-21_23-06-07.png/1024px-Screenshot_from_2022-06-21_23-06-07.png",
  },
  {
    key: "podcast",
    name: "Podcast Feed Generator",
    description: "Create a podcast feed from a Wikidata query",
    link: "https://podcast.nothispute.com/",
    software: [],
  },
];

export const Projects = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {projects.map((project, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {project.link.replace("https://", "").replace("/", "")}
              </Typography>
              <Typography variant="h5" component="div">
                {project.name}
              </Typography>
              {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                project
              </Typography> */}
              <Typography variant="body2" mb={2}>
                {project.description}
              </Typography>
              {project.image && (
                <img src={project.image} alt={project.name} width="100%" />
              )}
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                Open website
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
