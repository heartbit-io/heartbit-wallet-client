import {DATAProps} from '../utils/types';

export function fatchMyDataList() {
  // TODO(hyunsub): mok data for UI, need to connect api
  const DATA: DATAProps[] = [
    {
      key: 'key1',
      // 1 depth data
      id: 'xxxxxxxx-xxxxxx-xxxxxx-xx-xxxxxxxxxxxxx1',
      title: 'Heart & Movement Study',
      logoUrl: '',
      issuer: {
        name: 'Samsung Medical Center',
        did: 'did:ion:heartbitxxxxxxxxxxxxxxxxxxxxxxxxxx',
        isVerified: true,
      },
      issuedAt: '1st Seq. 2022.',
      dataCnt: 203,
      isNew: true,
      // 2 depth summary
      type: 'Clinical study',
      PI: 'Daniel Lee',
      startDate: '21. Jan. 2020.',
      endDate: '23. May. 2022',
      jurisdiction: 'South Korea',
      compatibleSystem: 'Raredata',
      // 2 depth issued data
      demographics: {
        birthDate: '28. April. 1987.',
        race: 'Asian, Korean',
        occupation: 'Computer programmer',
        education: "Master's Degree",
        maritalStatus: 'None',
        employmentStatus: 'Self-employed',
        height: 179,
        weight: 78,
      },
      isFamilyHistory: true,
      familyHistoryDiagnosis: 'Mather, Siblings',
      NF1Mutation: 'Positive',
    },
    {
      key: 'key2',
      // 1 depth data
      id: 'xxxxxxxx-xxxxxx-xxxxxx-xx-xxxxxxxxxxxxx2',
      title: 'Kabuki syndrome study',
      logoUrl: '',
      issuer: {
        name: 'Mayo Clinic',
        did: 'did:ion:heartbityyyyyyyyyyyyyyyyyyyyyyyyyy',
        isVerified: true,
      },
      issuedAt: '1st Seq. 2022.',
      dataCnt: 13,
      isNew: false,
      // 2 depth summary
      type: 'Clinical study',
      PI: 'Daniel Lee',
      startDate: '21. Jan. 2020.',
      endDate: '23. May. 2022',
      jurisdiction: 'South Korea',
      compatibleSystem: 'Raredata',
      // 2 depth issued data
      demographics: {
        birthDate: '28. April. 1987.',
        race: 'Asian, Korean',
        occupation: 'Computer programmer',
        education: "Master's Degree",
        maritalStatus: 'None',
        employmentStatus: 'Self-employed',
        height: 179,
        weight: 78,
      },
      isFamilyHistory: true,
      familyHistoryDiagnosis: 'Mather, Siblings',
      NF1Mutation: 'Positive',
    },
    {
      key: 'key3',
      id: 'xxxxxxxx-xxxxxx-xxxxxx-xx-xxxxxxxxxxxxx3',
      title: 'NF1 registry study',
      logoUrl: '',
      issuer: {
        name: 'Seoul National University Hospital',
        did: 'did:ion:heartbitzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
        isVerified: false,
      },
      issuedAt: '1st Seq. 2022.',
      dataCnt: 203,
      isNew: false,
      // 2 depth summary
      type: 'Clinical study',
      PI: 'Daniel Lee',
      startDate: '21. Jan. 2020.',
      endDate: '23. May. 2022',
      jurisdiction: 'South Korea',
      compatibleSystem: 'Raredata',
      // 2 depth issued data
      demographics: {
        birthDate: '28. April. 1987.',
        race: 'Asian, Korean',
        occupation: 'Computer programmer',
        education: "Master's Degree",
        maritalStatus: 'None',
        employmentStatus: 'Self-employed',
        height: 179,
        weight: 78,
      },
      isFamilyHistory: true,
      familyHistoryDiagnosis: 'Mather, Siblings',
      NF1Mutation: 'Positive',
    },
  ];

  return DATA;
}
