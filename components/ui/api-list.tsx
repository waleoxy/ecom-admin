"use client";

import { useOrigin } from "@/hooks/use-origin";
import { useParams } from "next/navigation";
import ApiAlert from "@/components/ui/api-alert";

interface ApiListProps {
  entityName: string;
  entityIdname: string;
}

const ApiList: React.FC<ApiListProps> = ({ entityIdname, entityName }) => {
  const params = useParams();
  const origin = useOrigin();

  console.log("or", origin);

  const baseUrl = `${origin}/api/${params.storeId}`;

  return (
    <>
      <ApiAlert
        title="GET"
        description={`${baseUrl}/${entityName}`}
        variant="public"
      />
      <ApiAlert
        title="GET"
        description={`${baseUrl}/${entityName}/${entityIdname}`}
        variant="public"
      />
      <ApiAlert
        title="POST"
        description={`${baseUrl}/${entityName}`}
        variant="admin"
      />
      <ApiAlert
        title="PATCH"
        description={`${baseUrl}/${entityName}/${entityIdname}`}
        variant="admin"
      />
      <ApiAlert
        title="DELETE"
        description={`${baseUrl}/${entityName}/${entityIdname}`}
        variant="admin"
      />
    </>
  );
};

export default ApiList;
