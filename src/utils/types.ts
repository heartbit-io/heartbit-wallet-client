export type demographicsProps = {
  birthDate: string;
  race: string;
  occupation: string;
  education: string;
  maritalStatus: string;
  employmentStatus: string;
  height: number;
  weight: number;
};

export type DATAProps = {
  key: string;
  id: string;
  title: string;
  logoUrl: string;
  issuer: string;
  issuedAt: string;
  dataCnt: number;
  isNew: boolean;
  type: string;
  PI: string;
  startDate: string;
  endDate: string;
  jurisdiction: string;
  CompatibleSystem: string;
  demographics: demographicsProps;
  isFamilyHistory: boolean;
  familyHistoryDiagnosis: string;
  NF1Mutation: string;
};
