"use client";

import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { useGetWorkspaceInfo } from "@/features/workspaces/api/use-get-workspace-info";
import { JoinWorkspaceForm } from "@/features/workspaces/components/join-workspace-form";

import { PageError } from "@/components/page-error";
import { PageLoader } from "@/components/page-loader";

export const WorkspaceIdJoinClient = () => {
  const workspaceId = useWorkspaceId();
  const { data: initalValues, isLoading } = useGetWorkspaceInfo({
    workspaceId,
  });

  if (isLoading) return <PageLoader />;

  if (!initalValues) return <PageError message="Workspace not found" />;

  return <JoinWorkspaceForm initalValues={initalValues} />;
};
