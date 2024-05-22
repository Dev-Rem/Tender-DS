"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { ActionAreaCard, ImgMediaCard } from "./components/Card";
import { useTheme } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import Modal from "@mui/material/Modal";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "90%", // Small screens
    sm: "70%", // Medium screens
    md: "40%", // Large screens
  },
  bgcolor: "background.paper",
  border: "#000",
  boxShadow: 24,
  maxHeight: "70%",
  overflowY: "auto",
};

const cardData = [
  {
    title: "Road Construction Project",
    description:
      "This tender invites bids for the comprehensive construction of a new 100-kilometer highway connecting City A to City B. The project encompasses extensive civil works including earthworks, drainage systems, bridge construction, and overpasses. The contractor will be responsible for all aspects of asphalt paving, road markings, and the installation of safety barriers along the highway. Furthermore, the project requires the development and implementation of environmental impact assessments and mitigation plans to ensure full compliance with national environmental standards. This includes measures to protect local wildlife, manage runoff, and reduce noise pollution. The successful bidder will also need to coordinate with local communities to minimize disruptions and provide regular progress updates to the overseeing governmental body.",
    image: "/images/images.jpeg",
    file: "/files/TestPDFfile.pdf",
  },
  {
    title: "Hospital Equipment Supply",
    description:
      "This tender is for the comprehensive supply, installation, and commissioning of cutting-edge medical equipment for the newly constructed regional hospital. The hospital aims to enhance its diagnostic and treatment capabilities with advanced equipment including MRI machines, CT scanners, X-ray machines, ultrasound devices, and a wide range of surgical instruments. Suppliers are required to provide detailed training programs for hospital staff, encompassing operation, safety protocols, and routine maintenance of the equipment. Additionally, the contract includes ongoing maintenance services, technical support, and warranty coverage for a minimum of five years. The successful supplier must ensure timely delivery and installation of all equipment, adhering to the hospital's strict schedule. The project’s ultimate goal is to equip the hospital with state-of-the-art technology to significantly improve patient care, diagnostic accuracy, and treatment outcomes.",
    image: "/images/images.jpeg",
    file: "/files/TestPDFfile.pdf",
  },
  {
    title: "School Renovation Project",
    description:
      "This tender seeks qualified contractors for the extensive renovation and refurbishment of 10 public schools within the district. The project involves replacing old roofing, upgrading electrical systems, expanding classrooms, and modernizing facilities to meet current educational standards. Contractors will also be responsible for ensuring all work complies with safety regulations and accessibility standards. This includes installing new fire alarm systems, upgrading restroom facilities to be ADA-compliant, and improving overall energy efficiency through the installation of new windows, insulation, and HVAC systems. Additionally, the project requires the creation of outdoor recreational areas and the installation of modern IT infrastructure to support digital learning. The successful bidder will coordinate closely with school administrators to minimize disruption to the academic schedule and ensure the safety of students and staff throughout the construction period.",
    image: "/images/images.jpeg",
    file: "/files/TestPDFfile.pdf",
  },
  {
    title: "IT Services for Government Offices",
    description:
      "This tender is for the provision of comprehensive IT support and infrastructure upgrades across multiple government departments. The selected vendor will be responsible for upgrading existing network infrastructure, enhancing cybersecurity measures, and implementing cloud-based solutions to improve data storage and accessibility. The project includes a detailed assessment of current IT systems, followed by the development and execution of a modernization plan. This involves the installation of new hardware, software upgrades, and extensive staff training to ensure a smooth transition. Additionally, the vendor will provide ongoing technical support and maintenance services to ensure the reliability and security of the IT systems. The objective is to enhance the efficiency and effectiveness of government operations, ensuring that all departments can securely access and share information as needed.",
    image: "/images/images.jpeg",
    file: "/files/TestPDFfile.pdf",
  },
  {
    title: "Water Treatment Plant Construction",
    description:
      "This tender invites bids for the design, construction, and commissioning of a new water treatment plant intended to provide clean and safe drinking water to the northern districts. The project scope includes the construction of intake structures, sedimentation tanks, filtration units, disinfection systems, and distribution pipelines. The contractor will be responsible for ensuring that the plant meets all regulatory standards for water quality and environmental protection. This includes conducting thorough environmental impact assessments, obtaining necessary permits, and implementing measures to mitigate any negative impacts on the surrounding ecosystem. Additionally, the project requires the training of local operators to manage and maintain the plant effectively. The successful bidder must deliver a fully operational plant capable of meeting the water demands of the growing population, with a focus on sustainability and long-term reliability.",
    image: "/images/images.jpeg",
    file: "/files/TestPDFfile.pdf",
  },
  {
    title: "Public Transportation System Upgrade",
    description:
      "This tender is for the comprehensive upgrade and expansion of the city's public transportation system. The project includes the procurement of new buses, the development of additional routes, and the implementation of electronic ticketing systems to improve efficiency and user convenience. Contractors will be responsible for the installation of new bus shelters, the creation of dedicated bus lanes, and the integration of real-time tracking systems to provide passengers with up-to-date information on bus schedules and arrivals. Additionally, the project involves extensive public outreach and education to ensure that residents are aware of the new services and how to use them effectively. The ultimate goal is to reduce traffic congestion, lower carbon emissions, and provide a reliable and accessible public transportation system that meets the needs of the city's growing population.",
    image: "/images/images.jpeg",
    file: "/files/TestPDFfile.pdf",
  },
  {
    title: "Renewable Energy Initiative",
    description:
      "This tender invites proposals for the development and implementation of a renewable energy project aimed at increasing the city's reliance on sustainable energy sources. The project includes the installation of solar panels on public buildings, the construction of wind turbines in designated areas, and the integration of these renewable energy sources into the existing power grid. Contractors will be responsible for conducting feasibility studies, securing necessary permits, and ensuring that all installations meet regulatory standards. Additionally, the project includes the creation of educational programs to inform the public about the benefits of renewable energy and how they can contribute to the city's sustainability goals. The successful bidder must deliver a comprehensive solution that not only reduces the city's carbon footprint but also provides a reliable and cost-effective source of energy for the future.",
    image: "/images/images.jpeg",
    file: "/files/TestPDFfile.pdf",
  },
  {
    title: "Community Health Program",
    description:
      "This tender seeks proposals for the development and implementation of a community health program designed to improve the overall health and well-being of residents. The program will include a range of services such as free health screenings, vaccination clinics, mental health support, and health education workshops. Contractors will be responsible for coordinating with local healthcare providers, securing funding, and managing the logistics of the program. Additionally, the project requires the creation of outreach campaigns to ensure that all community members are aware of the available services and how to access them. The ultimate goal is to provide comprehensive healthcare services that address the diverse needs of the community and promote long-term health and wellness.",
    image: "/images/images.jpeg",
    file: "/files/TestPDFfile.pdf",
  },
  {
    title: "Affordable Housing Development",
    description:
      "This tender is for the design and construction of affordable housing units to address the growing need for low-cost housing in the city. The project includes the construction of multi-family housing complexes, the development of supportive services for residents, and the implementation of sustainable building practices. Contractors will be responsible for ensuring that all units meet building codes and accessibility standards, as well as providing ongoing maintenance and management services. Additionally, the project requires coordination with local government agencies and community organizations to ensure that the housing meets the needs of low-income families and individuals. The successful bidder must deliver a comprehensive solution that provides safe, affordable, and sustainable housing for those in need.",
    image: "/images/images.jpeg",
    file: "/files/TestPDFfile.pdf",
  },
  {
    title: "Urban Green Space Initiative",
    description:
      "This tender seeks proposals for the development of urban green spaces within the city. The project includes the creation of parks, community gardens, and recreational areas that provide residents with access to nature and outdoor activities. Contractors will be responsible for site selection, landscape design, and the installation of amenities such as playgrounds, walking trails, and picnic areas. Additionally, the project requires the implementation of sustainable practices such as native plantings, water conservation measures, and the use of recycled materials. The ultimate goal is to enhance the quality of life for residents by providing accessible and well-maintained green spaces that promote physical activity, social interaction, and environmental stewardship.",
    image: "/images/images.jpeg",
    file: "/files/TestPDFfile.pdf",
  },
  {
    title: "Waste Management System Upgrade",
    description:
      "This tender is for the comprehensive upgrade of the city's waste management system. The project includes the procurement of new waste collection vehicles, the construction of recycling facilities, and the implementation of waste reduction programs. Contractors will be responsible for conducting waste audits, developing educational campaigns, and ensuring compliance with environmental regulations. Additionally, the project requires the creation of partnerships with local businesses and community organizations to promote recycling and waste reduction initiatives. The successful bidder must deliver a sustainable and efficient waste management system that reduces the city's environmental impact and promotes a culture of recycling and waste reduction.",
    image: "/images/images.jpeg",
    file: "/files/TestPDFfile.pdf",
  },
  {
    title: "Public Safety Enhancement",
    description:
      "This tender invites proposals for the enhancement of public safety within the city. The project includes the installation of surveillance cameras, the implementation of community policing programs, and the development of emergency response plans. Contractors will be responsible for conducting safety assessments, providing training for law enforcement personnel, and coordinating with local government agencies. Additionally, the project requires the creation of public awareness campaigns to inform residents about safety measures and how to report suspicious activities. The ultimate goal is to create a safer environment for all residents by reducing crime rates, improving emergency response capabilities, and fostering a sense of community vigilance.",
    image: "/images/images.jpeg",
    file: "/files/TestPDFfile.pdf",
  },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#f2f2f2",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  maxWidth: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  border: "1px solid #d7dcdd",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "70%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Home() {
  const theme = useTheme();
  const [page, setPage] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredData = cardData.filter(
    (card) =>
      card.title.includes(searchQuery) || card.description.includes(searchQuery)
  );
  const data = filteredData.length > 0 ? filteredData : cardData;
  const itemsPerPage = theme.breakpoints.values.sm > 600 ? 4 : 8;
  const numPages = Math.ceil(data.length / itemsPerPage);
  const modalContentRef = React.useRef(null);

  const handleOpen = (content) => {
    modalContentRef.current = content;
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-start bg-white p-5 pt-20">
      <Box
        sx={{
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search tenders"
            inputProps={{ "aria-label": "search" }}
            onChange={handleSearchChange}
          />
        </Search>
        <Grid container spacing={1} justifyContent="space-evenly">
          {data
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((card, index) => (
              <Grid
                key={index}
                xs={12}
                sm={6}
                md={6}
                lg={3}
                sx={{ textAlign: "left", padding: 2 }}
              >
                <ImgMediaCard {...card} handleOpen={() => handleOpen(card)} />
              </Grid>
            ))}
        </Grid>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
          <Pagination
            count={numPages}
            page={page}
            onChange={handleChangePage}
            variant="outlined"
            shape="rounded"
            size="large"
          />
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ActionAreaCard {...modalContentRef.current} />
        </Box>
      </Modal>
    </div>
  );
}
