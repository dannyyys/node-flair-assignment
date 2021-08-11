import { Heading, Center, Box, SimpleGrid } from "@chakra-ui/react";
import { JobCard } from "../components/assignment1/JobCard";

const jobs = [
  {
    image:
      "https://www.nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdXVMIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3822a9cff1804983ab596189219147a73b886bb6/JPMorgan%20Chase%20&%20Co..png",
    sub: "JPMorgan Chase & Co.",
    title: "Python Software Engineer - Commodities - Front Office Athena, VP",
    salary: "$7,000 - $14,000 SGD / Monthly",
    est: "EST",
    time: "10",
    role: "Fullstack",
    skills: ["Graph", "play", "Athena", "OOP", "C++", "Python"],
  },
  {
    image:
      "https://www.nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzZIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--31754c45ca3f4d5a816c8f43b853cedf8be60b4b/Apple.jpg",
    sub: "Apple",
    title:
      "Senior Software Engineer, Search Platform (Golang) - Apple Media Products",
    salary: "",
    est: "EST",
    time: "10",
    role: "Fullstack",
    skills: [
      "Docker",
      "Container",
      "Akka",
      "Lucene",
      "Solr",
      "Spark",
      "Kubernetes",
      "kafka",
      "Elasticsearch",
      "iOS",
      "Scala",
      "Hadoop",
      "Go",
    ],
  },
  {
    image:
      "https://www.nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbnlKIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f522dc717e148687ffc32bb6f3bdeae26cb99668/chainstack.png",
    sub: "Chainstack",
    title: "Full Stack Engineer (remote)",
    salary: "$3,333 - $5,000 SGD / Monthly",
    est: "EST",
    time: "10",
    role: "Fullstack",
    skills: [
      "Rest",
      "API",
      "Fabric",
      "Ethereum",
      "SPA",
      "Azure",
      "Kubernetes",
      "Flask",
      "Vue.js",
      "Django",
      "Python",
      "AWS",
    ],
  },
];

const assignment1 = () => {
  return (
    <Box backgroundColor="#f2f1ee" align="center" h="100vh" w="100%">
      <Heading>Assignment 1!!!!</Heading>
      <Center>
        <SimpleGrid columns={["1", "1", "2", "3", "3"]} spacing={5}>
          {jobs.map((job, i) => (
            <JobCard
              key={i}
              image={job.image}
              sub={job.sub}
              title={job.title}
              salary={job.salary}
              est={job.est}
              time={job.time}
              role={job.role}
              skills={job.skills}
            />
          ))}
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default assignment1;
