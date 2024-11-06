import InterestingSitesForViewInRoute from "@components/InterestingSites/InterestingSitesForViewInRoute";
import { SectionTypography } from "@components/RouteDetails/routeDetailsStyles";
import { INTERESTING_SITES_FOR_VIP_PEOPLE } from "@const/interestingSitesForVipPeople";
import { Grid2 } from "@mui/material";

interface IProps {
  id: number;
}

export default function DisplayInterestingSitesForVipPeople(props: IProps) {
  const { id } = props;
  const VipInTheCity = INTERESTING_SITES_FOR_VIP_PEOPLE.slice(0, 13);
  const VIpInTheoutskirts = INTERESTING_SITES_FOR_VIP_PEOPLE.slice(13, 40);

  return (
    <>
      <Grid2 size={{ xs: 12 }} sx={{ mt: 5 }}>
        <SectionTypography>Puntos de interés en la ciudad</SectionTypography>
        {VipInTheCity.map((site, index) => (
          <InterestingSitesForViewInRoute
            id={id}
            key={index}
            siteUrl={site.url}
            siteName={site.name}
            siteImage={site.image}
            siteIntroduction={site.introduction}
            siteDescription={site.description}
            routeVIP
          />
        ))}
      </Grid2>
      <Grid2 size={{ xs: 12 }} sx={{ mt: 5 }}>
        <SectionTypography>Puntos de interés en el paisaje</SectionTypography>
        {VIpInTheoutskirts.map((site, index) => (
          <InterestingSitesForViewInRoute
            id={id}
            key={index}
            siteUrl={site.url}
            siteName={site.name}
            siteImage={site.image}
            siteIntroduction={site.introduction}
            siteDescription={site.description}
            routeVIP
          />
        ))}
      </Grid2>
    </>
  );
}
